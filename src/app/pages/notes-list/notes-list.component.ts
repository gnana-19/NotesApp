import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss'],
    animations: [
        trigger('itemAnim', [
            transition('void => *', [
                style({
                    height: 0,
                    opacity: 0,
                    transform: 'scale(0.85)',
                    'margin-bottom': 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                }),
                animate(100, style({
                    height: '*',
                    'margin-bottom': '*',
                    paddingTop: '*',
                    paddingBottom: '*',
                    paddingLeft: '*',
                    paddingRight: '*',
                })),
                animate(100)
            ]),
            transition('* => void', [
                animate(50, style({
                    transform: 'scale(1.01)'
                })),
                animate(50, style({
                    transform: 'scale(1)',
                    opacity: 0.75,
                })),
                animate('120ms ease-out', style({
                    opacity: 0,
                    transform: 'scale(0.6)',
                })),
                animate('150ms ease-out', style({
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    height: 0,
                    'margin-bottom': 0,
                }))
            ])
        ]),
        trigger('listAnim', [
            transition('* => *', [
                query(':enter', [
                    style({
                        opacity: 0,
                        height: 0,
                    }),
                    stagger(100, [
                        animate('0.2s ease')
                    ])
                ], {
                    optional: true,
                })
            ]),
        ])
    ]
})
export class NotesListComponent implements OnInit {

    constructor(private notesService: NotesService) { }

    notes: Note[] = new Array<Note>();
    filteredNotes: Note[] = new Array<Note>();

    ngOnInit(): void {
        this.notes = this.notesService.getAll();
        this.filteredNotes = this.notes;
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    }

    deleteNote(id: number) {
        this.notesService.delete(id);
    }

    filter(query: string) {
        let allResults: Note[] = new Array<Note>();
        query = query.toLowerCase().trim();
        let terms: string[] = query.split(' ');
        terms = this.removeDuplicates(terms);
        terms.forEach(queryWord => {
            let results: Array<Note> = this.relaventNotes(queryWord);
            allResults = [...allResults, ...results];
        });
        // this.filteredNotes = this.removeDuplicates(allResults);
        let myMap = new Map();
        allResults.forEach(note => {
            if (myMap.has(note)) {
                myMap.set(note, myMap.get(note) + 1);
            } else {
                myMap.set(note, 1);
            }
        });
        let mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        let keys: Note[] = Array<Note>();
        for (let key of mapSort1) {
            keys.push(key[0]);
        }
        this.filteredNotes = keys;
    }

    removeDuplicates(arr: Array<any>): Array<any> {
        let uniqResults: Set<any> = new Set<any>();
        arr.forEach(value => {
            uniqResults.add(value);
        });
        return Array.from(uniqResults);
    }

    relaventNotes(query: string): Array<Note> {
        query = query.toLowerCase().trim();
        let relaventNotes = this.notes.filter(note => {
            if ((note.body && note.body.includes(query)) || note.title.includes(query)) {
                return true;
            }
            return false;
        });
        return relaventNotes;
    }
}
