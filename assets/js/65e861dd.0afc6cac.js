"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[492],{5467:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return f}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(1848),s=n(8330),d=n(6354),c=n(1631),l=["components"],p={sidebar_position:11,sidebar_label:"end & cend"},u="fixstr::basic_fixed_string::end` <br/> `fixstr::basic_fixed_string::cend",m={unversionedId:"api/member-functions/end",id:"api/member-functions/end",isDocsHomePage:!1,title:"fixstr::basic_fixed_string::end` <br/> `fixstr::basic_fixed_string::cend",description:"Returns an iterator to the character following the last character of the fixed string.",source:"@site/docs/api/member-functions/end.mdx",sourceDirName:"api/member-functions",slug:"/api/member-functions/end",permalink:"/fixed_string/docs/api/member-functions/end",editUrl:"https://github.com/unterumarmung/fixed_string/edit/add-documentation/documentation/docs/api/member-functions/end.mdx",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"end & cend"},sidebar:"tutorialSidebar",previous:{title:"begin & cbegin",permalink:"/fixed_string/docs/api/member-functions/begin"},next:{title:"rbegin & crbegin",permalink:"/fixed_string/docs/api/member-functions/rbegin"}},f=[{value:"Parameters",id:"parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Complexity",id:"complexity",children:[]},{value:"Example",id:"example",children:[]}],x={toc:f};function b(e){var t=e.components,p=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},x,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fixstrbasic_fixed_stringend--fixstrbasic_fixed_stringcend"},(0,a.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::end")," ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"h1"},"fixstr::basic_fixed_string::cend")),(0,a.kt)(s.Z,{mdxType:"CppOverloadList"},(0,a.kt)(o.Z,{num:1,code:"[[nodiscard]] constexpr iterator end() noexcept;",mdxType:"CppOverload"}),(0,a.kt)(o.Z,{num:2,code:"[[nodiscard]] constexpr const_iterator end() const noexcept;",mdxType:"CppOverload"}),(0,a.kt)(o.Z,{num:3,code:"[[nodiscard]] constexpr const_iterator cend() const noexcept;",mdxType:"CppOverload"})),(0,a.kt)("p",null,"Returns an iterator to the character following the last character of the fixed string."),(0,a.kt)("p",null,"This character acts as a placeholder, attempting to access it results in undefined behavior."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image explaining iterators",src:n(9680).Z})),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"(none)"),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"Iterator to the character following the last character."),(0,a.kt)("h2",{id:"complexity"},"Complexity"),(0,a.kt)("p",null,"Constant."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(d.Z,{link:"https://godbolt.org/z/8aEqj1eba",mdxType:"LinkButton"},"Run this code!"),(0,a.kt)(c.Z,{className:"language-cpp",mdxType:"CodeBlock"},'#include <algorithm>\n#include <fixed_string.hpp>\n#include <iostream>\n\nint main()\n{\n    fixstr::fixed_string s = "Exemparl";\n    std::next_permutation(s.begin(), s.end());\n    std::cout << s << \'\\n\'; // "Exemplar"\n}'),"Output:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Exemplar\n")))}b.isMDXComponent=!0},9680:function(e,t,n){t.Z=n.p+"assets/images/range-begin-end-6db6a03ba59c3dbd95a684efee92c756.png"}}]);