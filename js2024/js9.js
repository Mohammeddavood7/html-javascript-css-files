function result()
{
    let hm,cm,jm,bm,tot,avg,grade;
   hm = +html.value;
   cm = +css.value;
   jm = +js.value;
   bm = +bs.value;

   tot = hm+cm+jm+bm;
   avg = tot/4;

   if(hm>39&&cm>39&&jm>39&&bm>39)
   {
    grade = avg >=90?"A+":avg>80?"A":avg>70?"B+":avg>60?"B":avg>50?"C+":"D";
   }
   else
   {
    grade = "Fail";
   }
   
        total.value = "Total Marks: "+tot;
        average.value = "Average :"+avg;
        gradee.value = "Grade :"+grade;


}