import {
    LightningElement,
    track
} from 'lwc';
export default class HelloWorld extends LightningElement {
    @track obj = {
        value: "default parent"
    };
    @track value = "default prop parent";
    @track fullObj = {
        value: "default replace full obj"
    };

    //update all of the reactive propertiesat the same time
    handleValUpdate(event) {
        this.obj.value = event.target.value;
        this.value = event.target.value;
        this.fullObj = {
            value: event.target.value
        }
    }
    // update just the object value property
    handlePropertyUpdate(event) {
        this.obj.value = event.target.value;
    }

    // update just the primitive reactive property
    handlePrimitiveUpdate(event) {
        this.value = event.target.value;
    }

    // replace the entire object reactive property instead of just one key
    handleObjectUpdate(event) {
        this.fullObj = {
            value: event.target.value
        }
    }
}