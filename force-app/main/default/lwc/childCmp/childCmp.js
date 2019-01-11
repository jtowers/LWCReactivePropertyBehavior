import {
    LightningElement,
    api
} from 'lwc';
export default class ChildCmp extends LightningElement {
    @api childObj = {
        value: "default child"
    };
    @api childValue = "default child prop";
    @api label;
    alertObj() {
        alert(this.childObj.value);
    }
    alertVal() {
        alert(this.childValue);
    }
}