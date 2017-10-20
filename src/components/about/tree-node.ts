import { autoinject } from 'aurelia-framework';
import { bindable } from 'aurelia-templating';

@autoinject
export class TreeNode {
    @bindable treeNode;
}