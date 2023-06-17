"use strict";(self.webpackChunkquiz_maker_gerson=self.webpackChunkquiz_maker_gerson||[]).push([[541],{7541:(Q,_,u)=>{u.r(_),u.d(_,{CreateQuizComponent:()=>h});var a=u(6814),p=u(8361),n=u(95),r=u(2601),c=u(1770),f=u(2487),m=u(5156),t=u(6689),g=u(2042),d=u(3830);function y(o,l){if(1&o&&(t.TgZ(0,"option",9),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function z(o,l){if(1&o&&(t.TgZ(0,"option",9),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("value",l.index),t.xp6(1),t.hij(" ",e," ")}}function v(o,l){if(1&o&&(t.TgZ(0,"option",9),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.Q6J("value",l.index),t.xp6(1),t.hij(" ",e," ")}}function C(o,l){1&o&&t._UZ(0,"app-loading")}let h=(()=>{class o{constructor(e,i,s){this.quizService=e,this.store=i,this.location=s,this.formQuiz=new n.cw({numberQuestion:new n.NI(5,[n.kI.required]),category:new n.NI(-1),difficulty:new n.NI(-1),type:new n.NI(-1)}),this.categories$=this.store.select(f.lT),this.loading$=this.store.select(f.On),this.difficulty=r.a,this.typeQuiz=c.y,this.difficultList=[],this.types=[]}ngOnInit(){const e=Object.keys(r.a),i=Object.keys(c.y);this.difficultList=e.slice(e.length/2),this.types=i.slice(i.length/2)}GenerateQuiz(){let e=null,i=null,s=null;this.formQuiz.value.difficulty&&(e=this.formQuiz.value.difficulty>-1?r.a[this.formQuiz.value.difficulty]:null),this.formQuiz.value.type&&(i=this.formQuiz.value.type>-1?c.y[this.formQuiz.value.type]:null),this.formQuiz.value.category&&(s=this.formQuiz.value.category>0?this.formQuiz.value.category:null),this.quizService.generateQuiz(this.formQuiz.value.numberQuestion??5,s,e,i).subscribe({next:()=>{this.location.back()}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.v),t.Y36(d.yh),t.Y36(a.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-quiz"]],standalone:!0,features:[t.jDz],decls:38,vars:12,consts:[[1,"root-create-quiz",3,"formGroup"],[1,"has-text-centered"],[1,"title"],[1,"question"],[1,"panel","my-2"],[1,"panel-heading"],["for","category",1,"ml-2"],[1,"select","is-rounded"],["formControlName","category","name","catogory",1,"control-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["for","difficult",1,"ml-2"],["formControlName","difficulty","name","difficult",1,"control-select"],["for","typeQuiz",1,"ml-2"],["formControlName","type","name","typeQuiz",1,"control-select"],[1,"actions","mt-2"],[1,"button","is-fullwidth","is-primary",3,"click"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span",2),t._uU(3,"Generation Quiz based on Trivia API"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),t._uU(8,"Category"),t.qZA(),t.TgZ(9,"div",7)(10,"select",8)(11,"option",9),t._uU(12,"Any"),t.qZA(),t.YNc(13,y,2,2,"option",10),t.ALo(14,"async"),t.qZA()()()(),t.TgZ(15,"div",4)(16,"div",5)(17,"label",11),t._uU(18,"Difficulty"),t.qZA(),t.TgZ(19,"div",7)(20,"select",12)(21,"option",9),t._uU(22,"Any"),t.qZA(),t.YNc(23,z,2,2,"option",10),t.qZA()()()(),t.TgZ(24,"div",4)(25,"div",5)(26,"label",13),t._uU(27,"Type"),t.qZA(),t.TgZ(28,"div",7)(29,"select",14)(30,"option",9),t._uU(31,"Any"),t.qZA(),t.YNc(32,v,2,2,"option",10),t.qZA()()()()(),t.TgZ(33,"div",15)(34,"button",16),t.NdJ("click",function(){return i.GenerateQuiz()}),t._uU(35,"Generate Quiz"),t.qZA()(),t.YNc(36,C,1,0,"app-loading",17),t.ALo(37,"async"),t.qZA()),2&e&&(t.Q6J("formGroup",i.formQuiz),t.xp6(11),t.Q6J("value",-1),t.xp6(2),t.Q6J("ngForOf",t.lcZ(14,8,i.categories$)),t.xp6(8),t.Q6J("value",-1),t.xp6(2),t.Q6J("ngForOf",i.difficultList),t.xp6(7),t.Q6J("value",-1),t.xp6(2),t.Q6J("ngForOf",i.types),t.xp6(4),t.Q6J("ngIf",t.lcZ(37,10,i.loading$)))},dependencies:[a.ez,a.sg,a.O5,a.Ov,p.Bz,n.u5,n._Y,n.YN,n.Kr,n.EJ,n.JJ,n.JL,n.UX,n.sg,n.u,m.N],styles:[".root-create-quiz[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:2rem 0}.root-create-quiz[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%], .root-create-quiz[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{width:75%}.root-create-quiz[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.root-create-quiz[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]   .control-select[_ngcontent-%COMP%]{width:100%}"]}),o})()}}]);