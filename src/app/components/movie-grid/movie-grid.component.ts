import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-movie-grid',
    templateUrl: './movie-grid.component.html',
    styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent {
    @Input() movies: Array<any> = [];
    @Input() loadMoreLocked: boolean = true;
    @Output() loadMore: EventEmitter<void> = new EventEmitter();
    @ViewChild('grid') gridElement!: ElementRef;

    @HostListener('window:scroll')
    onScroll(){
        const currentPosition = window.scrollY + window.innerHeight;
        const gridBottomPosition = this.gridElement.nativeElement.offsetTop + this.gridElement.nativeElement.offsetHeight;
        if (currentPosition > gridBottomPosition && !this.loadMoreLocked) {
            this.loadMore.emit();
        }
    }
}
