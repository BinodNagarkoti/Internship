!function(e){e.fn.simpleContactForm=function(t){return t=e.extend({errorClass:"error",senderEmail:"",subject:"New message from your website",url:"",type:"POST",clearAfterSend:!0,success:function(){alert("Email sent!")}},t),e(this).each(function(){var s=e(this);s.submit(function(r){var a,i,l,n,c="",d=!1,o=t.senderEmail,u=t.url,h="";return s.is("[action]")&&(u=s.attr("action")),s.find("input,textarea,select").each(function(){var r;"submit"!=this.type&&(a=e(this),s.find("label").each(function(){e(this).attr("for")!=a.attr("id")&&e(this).attr("for")!=a.attr("name")||(i=e(this),l=i.html())}),a.removeClass(t.errorClass),(h=a.attr("id"))||(h=a.attr("name")),null!=i&&i.removeClass(t.errorClass),n=a.is("select")?a.find(":selected").val():"checkbox"==a.attr("type")?a.is(":checked")?"true":"false":"radio"==a.attr("type")?a.is(":checked")?"true":"false":a.val(),a.is(".required")&&0==n.length&&(d=!0,a.addClass(t.errorClass),i.addClass(t.errorClass)),a.is(".required")&&"checkbox"==a.attr("type")&&"false"==n&&(d=!0,i.addClass(t.errorClass)),a.is(".required")&&"radio"==a.attr("type")&&"false"==n&&(d=!0,i.addClass(t.errorClass)),(a.is(".email")||a.is(".senderEmail")||"email"==a.attr("type"))&&("-1"==(r=n).indexOf("@")||"-1"==r.indexOf(".")||""==r)&&(d=!0,a.addClass(t.errorClass),null!=i&&i.addClass(t.errorClass)),a.is(".senderEmail")&&(o=a.val()),a.is(".email")&&""==o.length&&(o=a.val()),"email"==a.attr("type")&&""==o.length&&(o=a.val()),n=encodeURIComponent(n),l=encodeURIComponent(l),c+="&"+h+"="+l+"||"+n,h="")}),c=c.substr(1,c.length),d||e.ajax({url:u,type:t.type,data:c+"&emailSubject="+t.subject+"&emailSender="+o,success:function(){t.clearAfterSend&&s.find("input,textarea,select").each(function(){"submit"!=this.type&&"checkbox"!=this.type&&"hidden"!=this.type?e(this).val(""):"checkbox"!=this.type&&e(this).removeAttr("checked")}),t.success()}}),!1})}),e(this)}}(jQuery);