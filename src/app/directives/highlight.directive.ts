import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector:'[appHighlight]'
})
export class HighLight {
    @Input() appHighlight = "yellow"
    constructor(private el: ElementRef){

    }

    @HostListener("mouseenter") onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = this.appHighlight;

    }

    @HostListener("mouseleave") onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = '';
    }

}