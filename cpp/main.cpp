#include <iostream>
#include "cache.hpp"

using namespace std;
int foo(int n) {
		if(n < 0) {
			return 0;
		}
		if(n < 2) {
			return n;
		}
		return foo(n - 1) + foo(n - 2);
}

int main() {
	//int num = 0;
	//std::cin >> num;
	//std::cout << foo(num) << std::endl;
	//std::cout << func(num) << std::endl;
	cout << reverse(char) << endl;
}
