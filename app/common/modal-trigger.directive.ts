import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './index';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') modalId: string;
    el: HTMLElement;
    constructor(ref: ElementRef,  @Inject(JQ_TOKEN) private $: any) { 
        this.el = ref.nativeElement;
    }
    
    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        });
    }
}