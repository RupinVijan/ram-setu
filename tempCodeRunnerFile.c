#include<stdio.h>
void main(){
    int n=6,arr1[]={1,3,5,7,8,9},arr2[]={0,1,0,1,3,4},arr[6],i,j,flag;
    for (i=0;i<n;i++){
        flag=0;
        for (j=0;j<n;j++){
            if (arr1[i]>=arr2[j]){
                flag++;
            }
        }
        arr[i]=flag;


    }
    for (i=0;i<n;i++){
        printf("%d",arr[i]);
    }
}