const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	leglp=[];
	let sum=0;
	let i=0,s=arr.length;
	while(i<s)
	{
		sum=sum+arr[i];
		if(sum<=n)
		{
			help.push(arr[i]);
			i++;
		}
		else
		{
			ans.push(help);
			sum=0;
			help=[];
	
			
		}
}
		if(help.length!=0)
		{
			ans.push(help);
		}
	return ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));