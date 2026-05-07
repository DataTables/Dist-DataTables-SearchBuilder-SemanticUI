/*! SearchBuilder Fomantic styling 2.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-se', 'datatables.net-searchbuilder'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-se')(root);
			}

			if (! window.DataTable.SearchBuilder) {
				require('datatables.net-searchbuilder')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


Object.assign(DataTable.SearchBuilder.classes, {
    clearAll: 'basic ui button dtsb-clearAll'
});
Object.assign(DataTable.Group.classes, {
    add: 'basic ui button dtsb-add',
    clearGroup: 'basic ui button dtsb-clearGroup',
    logic: 'basic ui button dtsb-logic',
    search: 'basic ui button dtsb-search'
});
Object.assign(DataTable.Criteria.classes, {
    condition: 'ui selection dropdown dtsb-condition',
    data: 'ui selection dropdown dtsb-data',
    delete: 'basic ui button dtsb-delete',
    left: 'basic ui button dtsb-left',
    right: 'basic ui button dtsb-right',
    value: 'basic ui selection dropdown dtsb-value'
});
DataTable.ext.buttons.searchBuilder.action = function (e, dt, node, config) {
    e.stopPropagation();
    this.popover(config._searchBuilder.getNode(), {
        align: 'container',
        span: 'container'
    });
    // Need to redraw the contents to calculate the correct positions for the
    // elements
    if (config._searchBuilder.s.topGroup !== undefined) {
        config._searchBuilder.s.topGroup.dom.container.trigger('dtsb-redrawContents');
    }
    DataTable.Dom.s('div.dtsb-searchBuilder').classRemove('ui basic vertical buttons');
};


return DataTable;
}));
