import"./assets/modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".feedback-form"),l=s.querySelector("textarea"),o=s.querySelector("input"),t={email:"",message:""};s.addEventListener("submit",i);s.addEventListener("input",c);u();function i(e){e.preventDefault();const{email:a,message:r}=e.target.elements,m=a.value,n=r.value;if(!m||!n){alert("«Fill please all fields»");return}console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state"),t.email="",t.message=""}function c(e){t.email=o.value.trim(),t.message=l.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function u(){const e=localStorage.getItem("feedback-form-state");if(e){const a=JSON.parse(e);o.value=a.email,l.value=a.message}}
//# sourceMappingURL=commonHelpers2.js.map
