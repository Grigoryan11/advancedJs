#include <iostream>

int cache[100] = {0};

int func(int n) {

		if(n < 0) {
			return 0;
		}
		if(n < 2) {
			return n;
		}

		if(!cache[n]){
			cache[n] = func(n - 1) + func(n - 2);
		}
		return cache[n];
}

