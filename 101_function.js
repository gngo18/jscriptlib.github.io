var intN = 2
int Exercise(int N){
	if(N>2){
	int value = Exercise(N-1)+Exercise(N-2)
	return value;
	}
	else{
		return 1;
	}
}