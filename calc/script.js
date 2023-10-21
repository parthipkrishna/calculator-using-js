function clickk(val)
{
    document.getElementById("siz").value=document.getElementById("siz").value+val
}
function cleardisp(val)
{
    document.getElementById("siz").value=""
}
function eqclick(){
    var txxt=document.getElementById("siz").value
    var res=eval(txxt)
    document.getElementById("siz").value=res
}
