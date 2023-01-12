import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-movie-grid',
    templateUrl: './movie-grid.component.html',
    styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent {
    @Input() movies: Array<any> = [];
    @Output() loadMore: EventEmitter<void> = new EventEmitter();

    triggerLoadMore(){
        this.loadMore.emit();
    }
}
