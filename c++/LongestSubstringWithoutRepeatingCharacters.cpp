/*
Given a string s, find the length of the longest 
substring without repeating characters.
*/

#include <iostream>
#include <algorithm>

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        const int sz = s.size();
        std::vector<int> subStrs;

        if (s == "") {
            return 0;
        }

        for (int i = 0; i < sz; i++) {
            std::string tempStr = "";
            tempStr += s[i];

            for (int j = i+1; j < sz; j++) {
                if (tempStr.find(s[j]) == std::string::npos) {
                    tempStr += s[j];
                } else {
                    break;
                }
            }

            subStrs.push_back(tempStr.size());
        }

        const int max = *std::max_element(subStrs.begin(), subStrs.end());

        return max;
    }
};
