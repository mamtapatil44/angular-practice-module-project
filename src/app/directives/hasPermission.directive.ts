import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector:'[appHasPermission]'
})
export class HasPermission {
    private isLoggedIn = false;

    constructor(private template:TemplateRef<any>,private vcr : ViewContainerRef){
        if(this.isLoggedIn){
            this.vcr.createEmbeddedView(this.template)
        } else{
            this.vcr.clear();
        }

    }
}