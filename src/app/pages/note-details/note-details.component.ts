import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
    selector: 'app-note-details',
    templateUrl: './note-details.component.html',
    styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

    note: Note = new Note();
    noteId: number = -1;
    new: boolean = false;
    constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            if (params.id) {
                this.note = this.noteService.get(params.id);
                this.noteId = params.id;
                this.new = false;
            } else {
                this.new = true;
            }
        });
    }

    onSubmit(form: NgForm): void {
        if (this.new) {
            this.noteService.add(form.value);
        } else {
            this.noteService.update(this.noteId, form.value.title, form.value.body);
        }
        this.router.navigateByUrl('/');
    }

    cancel() {
        this.router.navigateByUrl('/');
    }
}
