// reverse the number
#include <bits/stdc++.h>
using namespace std;
int main() {
    int lastdigit;
    
    int num;
    cin >> num;
    int rev = 0;
    while(num > 0) {
       lastdigit = num % 10;
       rev =  rev * 10 + lastdigit;
       num = num / 10; 
    }
    cout << "reverse number is  " << rev;

}