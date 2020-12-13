import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-note-card',
    templateUrl: './note-card.component.html',
    styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

    @Input('title')
    title!: string;
    @Input('body')
    body!: string;
    @Input('link')
    link!: string;
    @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('truncater')
    truncater!: ElementRef;
    @ViewChild('bodyText')
    bodyText!: ElementRef;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        let style = window.getComputedStyle(this.bodyText.nativeElement, null);
        let viewableHeight = parseInt(style.getPropertyValue('height'), 10);
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
            this.renderer.setStyle(this.truncater?.nativeElement, 'display', 'block')
        } else {
            this.renderer.setStyle(this.truncater?.nativeElement, 'display', 'none');
        }
    }
    onXButtonClick() {
        this.deleteEvent.emit();
    }
}
