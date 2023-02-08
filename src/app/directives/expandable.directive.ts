import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appExpandable]'
})
export class ExpandableDirective implements AfterViewInit {
    originalContent = '';
    isExpanded = false;

    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        this.originalContent = this.element.nativeElement.innerText;
        this.truncate();
    }

    @HostListener('click')
    toggle() {
        if (this.isExpanded) {
            this.truncate();
        } else {
            this.element.nativeElement.innerText = this.originalContent;
        }

        this.isExpanded = !this.isExpanded;
    }

    truncate() {
        this.element.nativeElement.innerText = this.originalContent.slice(0, 70);
    }
}
