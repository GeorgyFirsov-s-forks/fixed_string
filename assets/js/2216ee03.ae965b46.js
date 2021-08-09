"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[349],{5348:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return k}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(1848),s=n(8330),c=n(6354),d=n(1631),p=["components"],m={sidebar_position:6,sidebar_label:"back"},u="fixstr::basic_fixed_string::back",l={unversionedId:"api/member-functions/back",id:"api/member-functions/back",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::back",description:"Returns reference to the last character in the string.",source:"@site/docs/api/member-functions/back.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/back",permalink:"/fixed_string/docs/api/member-functions/back",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/back.mdx",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"back"},sidebar:"tutorialSidebar",previous:{title:"front",permalink:"/fixed_string/docs/api/member-functions/front"},next:{title:"empty",permalink:"/fixed_string/docs/api/member-functions/empty"}},k=[{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],f={toc:k};function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fixstrbasic_fixed_stringback"},(0,r.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::back")),(0,r.kt)(s.Z,{mdxType:"CppOverloadList"},(0,r.kt)(o.Z,{num:1,code:"[[nodiscard]] constexpr reference back() noexcept requires N != 0;",mdxType:"CppOverload"}),(0,r.kt)(o.Z,{num:2,code:"[[nodiscard]] constexpr const_reference back() const noexcept requires N != 0;",mdxType:"CppOverload"})),(0,r.kt)("p",null,"Returns reference to the last character in the string."),(0,r.kt)("p",null,"The function is not provided for empty strings."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"requires")," is used only in the documentation purposes.\nIn order to support C++17 the implementation uses SFINAE."))),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"Reference to the last element."),(0,r.kt)("h2",{id:"complexity"},"Complexity"),(0,r.kt)("p",null,"Constant."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(c.Z,{link:"https://godbolt.org/z/MoPbaoMv8",mdxType:"LinkButton"},"Run this code!"),(0,r.kt)(d.Z,{className:"language-cpp",mdxType:"CodeBlock"},"// clang-format off\n#include <fixed_string.hpp>\n#include <iostream>\n \nint main()\n{\n  {\n    fixstr::fixed_string s = \"Exemplary\";\n    char& back = s.back();\n    back = 's';\n    std::cout << s << '\\n'; // \"Exemplars\"\n  }\n \n  {\n    constexpr const fixstr::fixed_string c = \"Exemplary\";\n    char const& back = c.back();\n    std::cout << back << '\\n'; // 'y'\n  }\n}"),"Output:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Exemplars\ny\n")))}b.isMDXComponent=!0}}]);