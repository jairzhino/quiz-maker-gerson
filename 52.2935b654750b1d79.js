"use strict";(self.webpackChunkquiz_maker_gerson=self.webpackChunkquiz_maker_gerson||[]).push([[52],{4052:(p,s,i)=>{i.r(s),i.d(s,{QuizComponent:()=>m});var r=i(6814),c=i(2487),_=i(1463),t=i(6689),l=i(3830),z=i(2042);const a=function(e){return["/quiz",e]};function d(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",6)(6,"button",8),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",9),t.NdJ("click",function(){const q=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.RemoveQuiz(q.id))}),t._uU(9,"Delete"),t.qZA()()()}if(2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.questions.length),t.xp6(2),t.Q6J("routerLink",t.VKq(3,a,n.id))}}const g=function(){return["/quiz",0]};let m=(()=>{class e{constructor(n,u){this.store=n,this.quizService=u,this.quizzes$=this.store.select(c.QW)}AddQuiz(){this.quizService.createQuiz({id:0,questions:[]})}RemoveQuiz(n){this.quizService.removeQuiz(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.yh),t.Y36(z.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-quiz"]],standalone:!0,features:[t.jDz],decls:19,vars:5,consts:[[1,"box","root-quiz"],[1,"half-width"],[1,"title"],[1,"button","is-info",3,"routerLink"],[1,"content-table"],[1,"table","half-width"],[1,"has-text-right"],[4,"ngFor","ngForOf"],[1,"button","is-primary","mr-1",3,"routerLink"],[1,"button","is-danger",3,"click"]],template:function(n,u){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Quizzes"),t.qZA(),t.TgZ(4,"button",3),t._uU(5,"Add Quiz"),t.qZA()(),t.TgZ(6,"div",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"id"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"count"),t.qZA(),t.TgZ(14,"th",6),t._uU(15,"Actions"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,d,10,5,"tr",7),t.ALo(18,"async"),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(4,g)),t.xp6(13),t.Q6J("ngForOf",t.lcZ(18,2,u.quizzes$)))},dependencies:[r.ez,r.sg,r.Ov,_.Bz,_.rH],styles:[".root-quiz[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.root-quiz[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin-top:1rem}.root-quiz[_ngcontent-%COMP%]   .half-width[_ngcontent-%COMP%]{width:50%}"]}),e})()}}]);