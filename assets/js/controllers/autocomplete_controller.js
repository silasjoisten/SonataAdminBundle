/*!
 * This file is part of the SensioLabs Admin Bundle package.
 *
 * (c) SensioLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['input', 'dropdown', 'results', 'hiddenInputs', 'selected'];
    static values = {
        url: String,
        minLength: { type: Number, default: 2 },
        delay: { type: Number, default: 250 },
        multiple: { type: Boolean, default: false },
        paramName: { type: String, default: 'q' },
        pageParam: { type: String, default: '_page' },
        perPageParam: { type: String, default: '_per_page' },
        perPage: { type: Number, default: 10 },
        extraParams: { type: Object, default: {} },
        inputName: String,
        placeholder: { type: String, default: 'Search...' },
        noResultsText: { type: String, default: 'No results found' },
        loadingText: { type: String, default: 'Loading...' },
        safeLabel: { type: Boolean, default: false },
    };

    connect() {
        this.selectedItems = new Map();
        this.highlightedIndex = -1;
        this.debounceTimer = null;
        this.abortController = null;
        this.isOpen = false;

        // Load pre-selected values
        this.loadInitialValues();

        // Bind methods
        this.onClickOutside = this.onClickOutside.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        document.addEventListener('click', this.onClickOutside);
        this.inputTarget.addEventListener('keydown', this.onKeyDown);
    }

    disconnect() {
        document.removeEventListener('click', this.onClickOutside);
        this.inputTarget.removeEventListener('keydown', this.onKeyDown);
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        if (this.abortController) this.abortController.abort();
    }

    loadInitialValues() {
        const hiddenInputs = this.hiddenInputsTarget.querySelectorAll('input[type="hidden"]');
        hiddenInputs.forEach(input => {
            if (input.value && input.dataset.label) {
                this.selectedItems.set(input.value, input.dataset.label);
            }
        });
        this.renderSelectedItems();
    }

    onInput(event) {
        const query = event.target.value.trim();

        if (this.debounceTimer) clearTimeout(this.debounceTimer);

        if (query.length < this.minLengthValue) {
            this.hideDropdown();
            return;
        }

        this.showLoading();

        this.debounceTimer = setTimeout(() => {
            this.search(query);
        }, this.delayValue);
    }

    async search(query) {
        if (this.abortController) this.abortController.abort();
        this.abortController = new AbortController();

        const params = new URLSearchParams();
        params.set(this.paramNameValue, query);
        params.set(this.pageParamValue, '1');
        params.set(this.perPageParamValue, this.perPageValue.toString());

        // Add extra params
        const extraParams = this.extraParamsValue || {};
        Object.entries(extraParams).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                params.set(key, value);
            }
        });

        const url = `${this.urlValue}?${params.toString()}`;

        try {
            const response = await fetch(url, {
                signal: this.abortController.signal,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Autocomplete error:', data);
                this.renderError(data.message || 'Request failed');
                return;
            }

            if (data.status === 'KO') {
                this.renderError(data.message || 'Request failed');
                return;
            }

            this.renderResults(data.items || []);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Autocomplete error:', error);
                this.renderError('Failed to load results');
            }
        }
    }

    showLoading() {
        this.resultsTarget.innerHTML = `
            <div class="flex items-center gap-2 px-3 py-2 text-sm text-gray-500">
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>${this.escapeHtml(this.loadingTextValue)}</span>
            </div>
        `;
        this.showDropdown();
    }

    renderError(message) {
        this.resultsTarget.innerHTML = `
            <div class="px-3 py-2 text-sm text-error-600">
                ${this.escapeHtml(message)}
            </div>
        `;
        this.showDropdown();
    }

    renderResults(items) {
        this.highlightedIndex = 0;

        if (items.length === 0) {
            this.resultsTarget.innerHTML = `
                <div class="px-3 py-2 text-sm text-gray-500">
                    ${this.escapeHtml(this.noResultsTextValue)}
                </div>
            `;
            this.showDropdown();
            return;
        }

        const html = items.map((item, index) => {
            const itemId = String(item.id);
            const isSelected = this.selectedItems.has(itemId);
            const label = this.safeLabelValue ? item.label : this.escapeHtml(item.label);
            const isHighlighted = index === 0;

            return `
                <button type="button"
                    class="admin-autocomplete-item ${isSelected ? 'selected' : ''} ${isHighlighted ? 'highlighted' : ''}"
                    data-action="click->sensiolabs-de--admin-bundle--autocomplete#select"
                    data-sensiolabs-de--admin-bundle--autocomplete-id-param="${item.id}"
                    data-sensiolabs-de--admin-bundle--autocomplete-label-param="${this.escapeHtml(item.label)}"
                    data-index="${index}">
                    <span class="truncate">${label}</span>
                    ${isSelected ? `
                        <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    ` : ''}
                </button>
            `;
        }).join('');

        this.resultsTarget.innerHTML = html;
        this.showDropdown();
    }

    select(event) {
        event.preventDefault();
        event.stopPropagation();

        const id = String(event.params.id);
        const label = event.params.label;
        const button = event.currentTarget;

        if (this.multipleValue) {
            if (this.selectedItems.has(id)) {
                this.selectedItems.delete(id);
                button.classList.remove('selected');
                const checkmark = button.querySelector('svg');
                if (checkmark) checkmark.remove();
            } else {
                this.selectedItems.set(id, label);
                button.classList.add('selected');
                if (!button.querySelector('svg')) {
                    button.insertAdjacentHTML('beforeend', `
                        <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    `);
                }
            }
            this.renderSelectedItems();
            this.updateHiddenInputs();
        } else {
            this.selectedItems.clear();
            this.selectedItems.set(id, label);
            this.renderSelectedItems();
            this.updateHiddenInputs();
            this.hideDropdown();
            this.inputTarget.value = '';
        }
    }

    removeItem(event) {
        event.preventDefault();
        event.stopPropagation();
        const id = String(event.params.id);
        this.selectedItems.delete(id);
        this.renderSelectedItems();
        this.updateHiddenInputs();
    }

    renderSelectedItems() {
        if (!this.hasSelectedTarget) return;

        if (this.selectedItems.size === 0) {
            this.selectedTarget.innerHTML = '';
            return;
        }

        const maxVisible = 1;
        const entries = Array.from(this.selectedItems.entries());
        const visibleItems = entries.slice(0, maxVisible);
        const hiddenCount = entries.length - maxVisible;

        let html = visibleItems.map(([id, label]) => `
            <span class="admin-autocomplete-tag">
                <span class="truncate">${this.escapeHtml(label)}</span>
                <button type="button"
                    class="admin-autocomplete-tag-remove"
                    data-action="click->sensiolabs-de--admin-bundle--autocomplete#removeItem"
                    data-sensiolabs-de--admin-bundle--autocomplete-id-param="${id}">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </span>
        `).join('');

        if (hiddenCount > 0) {
            html += `
                <button type="button"
                    class="admin-autocomplete-more"
                    data-action="click->sensiolabs-de--admin-bundle--autocomplete#showAllSelected">
                    +${hiddenCount}
                </button>
            `;
        }

        this.selectedTarget.innerHTML = html;
    }

    showAllSelected(event) {
        event.preventDefault();
        event.stopPropagation();

        this.highlightedIndex = 0;
        const entries = Array.from(this.selectedItems.entries());

        const html = entries.map(([id, label], index) => `
            <button type="button"
                class="admin-autocomplete-item selected ${index === 0 ? 'highlighted' : ''}"
                data-action="click->sensiolabs-de--admin-bundle--autocomplete#toggleFromList"
                data-sensiolabs-de--admin-bundle--autocomplete-id-param="${id}"
                data-sensiolabs-de--admin-bundle--autocomplete-label-param="${this.escapeHtml(label)}"
                data-index="${index}">
                <span class="truncate">${this.escapeHtml(label)}</span>
                <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </button>
        `).join('');

        this.resultsTarget.innerHTML = html;
        this.showDropdown();
    }

    toggleFromList(event) {
        event.preventDefault();
        event.stopPropagation();

        const id = String(event.params.id);

        if (this.selectedItems.has(id)) {
            this.selectedItems.delete(id);
        } else {
            this.selectedItems.set(id, event.params.label);
        }

        this.renderSelectedItems();
        this.updateHiddenInputs();

        // Re-render the list to update checkmarks
        if (this.selectedItems.size > 0) {
            this.showAllSelected(event);
        } else {
            this.hideDropdown();
        }
    }

    updateHiddenInputs() {
        const name = this.multipleValue ? `${this.inputNameValue}[]` : this.inputNameValue;

        if (this.selectedItems.size === 0) {
            this.hiddenInputsTarget.innerHTML = this.multipleValue ? '' : `<input type="hidden" name="${name}" value="">`;
            return;
        }

        const html = Array.from(this.selectedItems.entries()).map(([id, label]) =>
            `<input type="hidden" name="${name}" value="${id}" data-label="${this.escapeHtml(label)}">`
        ).join('');

        this.hiddenInputsTarget.innerHTML = html;
    }

    showDropdown() {
        this.dropdownTarget.classList.remove('hidden');
        this.isOpen = true;
    }

    hideDropdown() {
        this.dropdownTarget.classList.add('hidden');
        this.isOpen = false;
        this.highlightedIndex = -1;
    }

    onClickOutside(event) {
        if (!this.element.contains(event.target)) {
            this.hideDropdown();
        }
    }

    onKeyDown(event) {
        if (!this.isOpen) {
            if (event.key === 'ArrowDown' && this.inputTarget.value.length >= this.minLengthValue) {
                this.search(this.inputTarget.value.trim());
            }
            return;
        }

        const items = this.resultsTarget.querySelectorAll('.admin-autocomplete-item');
        if (items.length === 0) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.highlightedIndex = Math.min(this.highlightedIndex + 1, items.length - 1);
                this.updateHighlight(items);
                break;

            case 'ArrowUp':
                event.preventDefault();
                this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
                this.updateHighlight(items);
                break;

            case 'Enter':
                event.preventDefault();
                if (this.highlightedIndex >= 0 && items[this.highlightedIndex]) {
                    items[this.highlightedIndex].click();
                }
                break;

            case 'Escape':
                event.preventDefault();
                this.hideDropdown();
                break;

            case 'Tab':
                this.hideDropdown();
                break;
        }
    }

    updateHighlight(items) {
        items.forEach((item, index) => {
            if (index === this.highlightedIndex) {
                item.classList.add('highlighted');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('highlighted');
            }
        });
    }

    onFocus() {
        // Don't auto-open on focus, wait for typing
    }

    clear() {
        this.selectedItems.clear();
        this.renderSelectedItems();
        this.updateHiddenInputs();
        this.inputTarget.value = '';
        this.hideDropdown();
    }

    escapeHtml(text) {
        if (text === null || text === undefined) return '';
        const div = document.createElement('div');
        div.textContent = String(text);
        return div.innerHTML;
    }
}
