/*
 * This file prevents Google Closure Compiler from munging (rename and minify)
 * the non-ClojureScript libraries.
 *
 * If new libs are added, add a var for the namespace and the used functions!
 */

/**
* @const
*/
var CodeMirror = {};
/**
* @param {number} param1
*/
CodeMirror.setValue = function (param1) {};
/**
* @return {undefined}
*/
CodeMirror.getValue = function (param1) {};

/**
 * @const
 */
var jqconsole = {};
/**
 * @param {number} param1
 */
jqconsole.Write = function (param1) {};
/**
 * @return {undefined}
 */
jqconsole.Focus = function (param1) {};
/**
 * @return {undefined}
 */
jqconsole.Prompt = function (param1, param2, param3, param4) {};
/**
 * @return {undefined}
 */
jqconsole.RegisterShortcut = function (param1, param2) {};
/**
 * @return {undefined}
 */
jqconsole.SetPromptText = function (param1) {};

/**
* @type {number}
*/
var jQuery;
/**
* @return {undefined}
*/
jQuery.fn = {
    on: function() {}
};

/** @see http://docs.jquery.com/Plugins/Authoring */
jQuery.fn;


///**
//* @type {number}
//*/
//var jQuery;
///**
//* @return {undefined}
//*/
//jQuery.fn = {
//    on: function() {}
//};
///**
// * @see http://docs.jquery.com/Plugins/Authoring
// * */
//jQuery.fn;
