function getAmount()
{
    let p , i ,t, si , tamt;

    p = perAmount.value;
    i = interest.value;
    t = time.value;
    si = p*t*i/100;
    tamt = +p+si;

    irest.value = "interest Amount: "+si;
    totalAmount.value = "Total Amount: "+tamt;

}