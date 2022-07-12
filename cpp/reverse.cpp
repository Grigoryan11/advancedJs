#include <iostream>
#include <string>
using namespace std;

int strlen(char* str) {
	int len = 0;

	for(int i=0; ;i++) {
		if(str[i] == '\0'){
			break;
		}
		len++;
	}
	return len;
}

char* revString(char* str){
	
	char t;
	for(int i = 0; i < strlen(str)/2; i++) {
		t = str[i];
	   	str[i] = str[strlen(str) - 1 - i];
		str[strlen(str) - 1 - i] = t; 	
	}
	return str;
}

int main() {
	char x[] = "Sam";
	cout << revString(x) << endl;
	cout << x << endl;
}
