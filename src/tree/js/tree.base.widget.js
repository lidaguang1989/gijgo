﻿/**
  * @widget Tree
  * @plugin Base
  */
gj.tree.widget = function ($element, jsConfig) {
    var self = this,
        methods = gj.tree.methods;

    /**
     * Reload the tree.
     * @method
     * @param {object} params - Params that needs to be send to the server. Only in use for remote data sources.
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="tree.reload()">Click to load</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         autoLoad: false
     *     });
     * </script>
     * @example Search <!-- tree -->
     * <input type="text" id="query" /> <button onclick="Search()">Search</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function Search() {
     *         tree.reload({ query: $('#query').val() });
     *     }
     * </script>
     */
    self.reload = function (params) {
        return gj.widget.prototype.reload.call(this, params);
    };

    /**
     * Render data in the tree
     * @method
     * @param {object} response - An object that contains the data that needs to be loaded in the tree.
     * @fires dataBinding, dataBound
     * @return tree
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree, onSuccessFunc;
     *     onSuccessFunc = function (response) {
     *         //you can modify the response here if needed
     *         tree.render(response);
     *     };
     *     tree = $('#tree').tree({
     *         dataSource: { url: '/Locations/Get', success: onSuccessFunc }
     *     });
     * </script>
     */
    self.render = function (response) {
        return methods.render(this, response);
    };

    /**
     * Add node to the tree.
     * @method
     * @param {object} data - The node data.
     * @param {object} parentNode - Parent node as jquery object.
     * @param {Number} position - Position where the new node need to be added. 
     * @return jQuery object
     * @example Append.ToRoot <!-- tree -->
     * <button onclick="append()">Append Node</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     *     function append() {
     *         tree.addNode({ text: 'New Node' });
     *     }
     * </script>
     * @example Append.Parent <!-- tree -->
     * <button onclick="append()">Append Node</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent);
     *     }
     * </script>
     * @example Bootstrap <!-- bootstrap, tree -->
     * <button onclick="append()">Append Node</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get" data-ui-library="bootstrap"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent);
     *     }
     * </script>
     * @example Prepend <!-- tree -->
     * <button onclick="append()">Append Node</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent, 1);
     *     }
     * </script>
     * @example Position <!-- tree -->
     * <button onclick="append()">Append Node</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var parent, tree = $('#tree').tree();
     *     tree.on('dataBound', function () {
     *         parent = tree.getNodeByText('Asia');
     *         tree.off('dataBound');
     *     });
     *     function append() {
     *         tree.addNode({ text: 'New Node' }, parent, 2);
     *     }
     * </script>
     */
    self.addNode = function (data, $parentNode, position) {
        return methods.addNode(this, data, $parentNode, position);
    };

    /**
     * Remove node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="remove()">Remove USA</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function remove() {
     *         var node = tree.getNodeByText('USA');
     *         tree.removeNode(node);
     *     }
     * </script>
     */
    self.removeNode = function ($node) {
        return methods.remove(this, $node);
    };

    /**
     * Destroy the tree.
     * @method
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="tree.destroy()">Destroy</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     * </script>
     */
    self.destroy = function () {
        return methods.destroy(this);
    };

    /**
     * Expand node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @param {boolean} cascade - Expand all children
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="expand()">Expand Asia</button><button onclick="collapse()">Collapse Asia</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.expand(node);
     *     }
     *     function collapse() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.collapse(node);
     *     }
     * </script>
     * @example Cascade <!-- tree -->
     * <button onclick="expand()">Expand North America</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('North America');
     *         tree.expand(node, true);
     *     }
     * </script>
     */
    self.expand = function ($node, cascade) {
        return methods.expand(this, $node, cascade);
    };

    /**
     * Collapse node from the tree.
     * @method
     * @param {object} node - The node as jQuery object
     * @param {boolean} cascade - Collapse all children
     * @return jQuery object
     * @example Method.Sample <!-- tree -->
     * <button onclick="expand()">Expand Asia</button><button onclick="collapse()">Collapse Asia</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function expand() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.expand(node);
     *     }
     *     function collapse() {
     *         var node = tree.getNodeByText('Asia');
     *         tree.collapse(node);
     *     }
     * </script>
     * @example Cascade <!-- tree -->
     * <button onclick="collapse()">Collapse North America</button>
     * <br/><br>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     function collapse() {
     *         var node = tree.getNodeByText('North America');
     *         tree.collapse(node, true);
     *     }
     * </script>
     */
    self.collapse = function ($node, cascade) {
        return methods.collapse(this, $node, cascade);
    };

    /**
     * Expand all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.expandAll()">Expand All</button><button onclick="tree.collapseAll()">Collapse All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     * </script>
     */
    self.expandAll = function () {
        return methods.expandAll(this);
    };

    /**
     * Collapse all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.expandAll()">Expand All</button><button onclick="tree.collapseAll()">Collapse All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree();
     * </script>
     */
    self.collapseAll = function () {
        return methods.collapseAll(this);
    };

    /**
     * Return node data by id of the record.
     * @method
     * @param {string|number} id - The id of the record that needs to be returned
     * @return object
     * @example sample <!-- tree -->
     * <button id="btnGetData">Get Data</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         primaryKey: 'id' //define the name of the column that you want to use as ID here.
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = tree.getDataById(9);
     *         alert('The population of ' + data.text + ' is ' + data.population);
     *     });
     * </script>
     */
    self.getDataById = function (id) {
        return methods.getDataById(this, id, this.data('records'));
    };

    /**
     * Return node data by text.
     * @method
     * @param {string} text - The text of the record that needs to be returned
     * @return object
     * @example sample <!-- tree -->
     * <button id="btnGetData">Get Data</button>
     * <br/><br/>
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *     });
     *     $('#btnGetData').on('click', function () {
     *         var data = tree.getDataByText('California');
     *         alert('The population of California is ' + data.population);
     *     });
     * </script>
     */
    self.getDataByText = function (text) {
        return methods.getDataByText(this, text, this.data('records'));
    };

    /**
     * Return node by id of the record.
     * @method
     * @param {string} id - The id of the node that needs to be returned
     * @return jQuery object
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         primaryKey: 'id' //define the name of the column that you want to use as ID here.
     *     });
     *     tree.on('dataBound', function() {
     *         var node = tree.getNodeById('1');
     *         node.css('background-color', 'red');
     *     });
     * </script>
     */
    self.getNodeById = function (id) {
        return methods.getNodeById(this.children('ul'), id);
    };

    /**
     * Return node by text.
     * @method
     * @param {string} text - The text in the node that needs to be returned
     * @return jQuery object
     * @example sample <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get'
     *     });
     *     tree.on('dataBound', function() {
     *         var node = tree.getNodeByText('Asia');
     *         node.css('background-color', 'red');
     *     });
     * </script>
     */
    self.getNodeByText = function (text) {
        return methods.getNodeByText(this.children('ul'), text);
    };

    /**
     * Select node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @return jQuery Object
     * @example Select.Method <!-- tree -->
     * <button onclick="tree.select(northAmerica)">Select North America</button>
     * <button onclick="tree.unselect(northAmerica)">Unselect North America</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'id',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         },
     *         select: function (e, node, id) {
     *             alert('select is fired for node with id=' + id);
     *         }
     *     });
     * </script>
     */
    self.select = function ($node) {
        return methods.select(this, $node);
    };

    /**
     * Unselect node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @return jQuery Object
     * @example UnSelect.Method <!-- tree -->
     * <button onclick="tree.select(northAmerica)">Select North America</button>
     * <button onclick="tree.unselect(northAmerica)">Unselect North America</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         primaryKey: 'id',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');  
     *         },
     *         unselect: function (e, node, id) {
     *             alert('unselect is fired for node with id=' + id);
     *         }
     *     });
     * </script>
     */
    self.unselect = function ($node) {
        return methods.unselect(this, $node);
    };

    /**
     * Select all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.selectAll()">Select All</button><button onclick="tree.unselectAll()">Unselect All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     tree.on('dataBound', function() {
     *         tree.expandAll();
     *     });
     * </script>
     */
    self.selectAll = function () {
        return methods.selectAll(this);
    };

    /**
     * Unselect all tree nodes
     * @method
     * @return jQuery object
     * @example Sample <!-- tree -->
     * <button onclick="tree.selectAll()">Select All</button><button onclick="tree.unselectAll()">Unselect All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     tree.on('dataBound', function() {
     *         tree.expandAll();
     *     });
     * </script>
     */
    self.unselectAll = function () {
        return methods.unselectAll(this);
    };

    /**
     * Return an array with the ids of the selected nodes.
     * @method
     * @return array
     * @example Sample <!-- tree -->
     * <button id="btnShowSelection">Show Selections</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         selectionType: 'multiple'
     *     });
     *     $('#btnShowSelection').on('click', function () {
     *         var selections = tree.getSelections();
     *         selections && selections.length && alert(selections.join());
     *     });
     * </script>
     */
    self.getSelections = function () {
        return methods.getSelections(this.children('ul'));
    };

    /**
     * Return an array with the ids of all children.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Include all nested children. Set to true by default.
     * @return array
     * @example Cascade.True <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBound: function () {
     *             var node = tree.getNodeByText('North America'),
     *                 children = tree.getChildren(node);
     *             alert(children.join());
     *         }
     *     });
     * </script>
     * @example Cascade.False <!-- tree -->
     * <div id="tree"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         dataSource: '/Locations/Get',
     *         dataBound: function () {
     *             var node = tree.getNodeByText('North America'),
     *                 children = tree.getChildren(node, false);
     *             alert(children.join());
     *         }
     *     });
     * </script>
     */
    self.getChildren = function ($node, cascade) {
        return methods.getChildren(this, $node, cascade);
    };

    /**
     * Enable node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Enable all children. Set to true by default.
     * @return jQuery Object
     * @example Material.Design <!-- checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)">Disable North America (Non-Cascade)</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     * @example Bootstrap <!-- bootstrap, checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)">Disable North America (Non-Cascade)</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         uiLibrary: 'bootstrap',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     * @example Bootstrap.4 <!-- bootstrap4, fontawesome, checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)">Disable North America (Non-Cascade)</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         uiLibrary: 'bootstrap4',
     *         iconsLibrary: 'fontawesome',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     */
    self.enable = function ($node, cascade) {
        return methods.enableNode(this, $node, cascade);
    };

    /**
     * Enable all nodes from the tree.
     * @method
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enableAll()">Enable All</button>
     * <button onclick="tree.disableAll()">Disable All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         checkboxes: true
     *     });
     * </script>
     */
    self.enableAll = function () {
        return methods.enableAll(this);
    };

    /**
     * Disable node from the tree.
     * @method
     * @param {Object} node - The node as jquery object.
     * @param {Boolean} cascade - Disable all children. Set to true by default.
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enable(northAmerica)">Enable North America (Cascade)</button>
     * <button onclick="tree.disable(northAmerica)">Disable North America (Cascade)</button>
     * <button onclick="tree.enable(northAmerica, false)">Enable North America (Non-Cascade)</button>
     * <button onclick="tree.disable(northAmerica, false)">Disable North America (Non-Cascade)</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree, northAmerica;
     *     tree = $('#tree').tree({
     *         checkboxes: true,
     *         primaryKey: 'ID',
     *         dataBound: function () {
     *             northAmerica = tree.getNodeByText('North America');
     *         }
     *     });
     * </script>
     */
    self.disable = function ($node, cascade) {
        return methods.disableNode(this, $node, cascade);
    };

    /**
     * Disable all nodes from the tree.
     * @method
     * @return jQuery Object
     * @example Sample <!-- checkbox, tree -->
     * <button onclick="tree.enableAll()">Enable All</button>
     * <button onclick="tree.disableAll()">Disable All</button>
     * <br/><br/>
     * <div id="tree" data-source="/Locations/Get"></div>
     * <script>
     *     var tree = $('#tree').tree({
     *         checkboxes: true
     *     });
     * </script>
     */
    self.disableAll = function () {
        return methods.disableAll(this);
    };

    $.extend($element, self);
    if ('tree' !== $element.attr('data-type')) {
        methods.init.call($element, jsConfig);
    }

    return $element;
};

gj.tree.widget.prototype = new gj.widget();
gj.tree.widget.constructor = gj.tree.widget;

(function ($) {
    $.fn.tree = function (method) {
        var $widget;
        if (this && this.length) {
            if (typeof method === 'object' || !method) {
                return new gj.tree.widget(this, method);
            } else {
                $widget = new gj.tree.widget(this, null);
                if ($widget[method]) {
                    return $widget[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    throw 'Method ' + method + ' does not exist.';
                }
            }
        }
    };
})(jQuery);