#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

int main()
{
    //컨테이너 생성
    char data[100]; // data is a character array that can store 100 characters.
    ofstream outputFile; // ofstream is a class that can write to a file. 
                         // outputFile is a variable that stores the file stream.

    outputFile.open("simplefile.dat"); // outputFile.open is a function that opens a file.
                                        // "simplefile.data" is a string that stores the name of the file.


    cout << "Enter some text: " << endl;
    cin.getline(data, 100); // cin.getline is a function that reads a line from the keyboard.
                            // data is a variable that stores the characters read from the keyboard.
                            // 100 is a constant that stores the maximum number of characters that can be read.

    outputFile << data << endl; // outputFile << data is a statement that writes the characters stored in data to the file.
                                // outputFile is a variable that stores the file stream.
                                // data is a variable that stores the characters read from the keyboard.
    cout << "The text you entered is: " << endl;
    cout << data << endl; // cout << data is a statement that writes the characters stored in data to the screen.
                          // data is a variable that stores the characters read from the keyboard.
    cout << "enter a number: " << endl;
    cin >> data; // cin >> data is a statement that reads a line from the keyboard.
                 // data is a variable that stores the characters read from the keyboard.
    cin.ignore(); // cin.ignore is a function that ignores the characters read from the keyboard.

    outputFile << data << endl; // outputFile << data is a statement that writes the characters stored in data to the file.
                                // outputFile is a variable that stores the file stream.
                                // data is a variable that stores the characters read from the keyboard.

    outputFile.close(); // outputFile.close is a function that closes the file.

    ifstream inputFile; // ifstream is a class that can read from a file.
                       // inputFile is a variable that stores the file stream.
    inputFile.open("simplefile.dat"); // inputFile.open is a function that opens a file.
                                      // "simplefile.dat" is a string that stores the name of the file.

    stringstream strStream; // stringstream is a class that can store a string.
                           // strStream is a variable that stores the string stream.
    strStream << inputFile.rdbuf(); // strStream << inputFile.rdbuf() is a statement that stores the characters read from the file in strStream.
                                    // inputFile is a variable that stores the file stream.
                                    // strStream is a variable that stores the string stream.

    cout << strStream.str(); // cout << strStream.str() is a statement that writes the characters stored in strStream to the screen.
                             // strStream is a variable that stores the string stream.

    inputFile.close(); // inputFile.close is a function that closes the file.
                    

    return 0;
}