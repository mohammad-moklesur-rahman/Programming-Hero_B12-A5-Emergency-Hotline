
# <a href="https://mohammad-moklesur-rahman.github.io/Programming-Hero_B12-A5-Emergency-Hotline/">Live Link</a>


## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: এখানে getElementById দ্বারা মাত্র একটি element ধরতে পারি। কারণ Id হলো ইউনিক এজন্য Id অনুযায়ী এটির সাহায্যে একটি মাত্র element ধরা যায়।

getElementsByClassName দ্বারা এক বা একাধিক element ধরা যায়। ClassName অনুযায়ী একটি element বা একই ClassName একাধিক element এ ব্যবহার করে একসাথে একাধিক element ধরা যায়।

querySelector দ্বার যেকোন একটি মাত্র element ধরা যায়। এখানে যদি #id বা .Class বা tag একই নামে একাধিক থাকে তাহলে শুধু মাত্র প্রথম element টি ধরা যায়।

querySelectorAll দ্বারা একাধিক element ধরা যায়। যখন #id বা .Class বা tag একই নামে একাধিক থাকে তখন সবগুলো element একসাথে ধরা যায়।


## 2. How do you create and insert a new element into the DOM?

Ans: আমরা খুব সহজে document.createElement() মেথড ব্যবহার করে যেকোনো element তৈরি করতে পারি। আমাদের তৈরি করা element টি যদি insert বা কোনো জায়গায় বসাতে চাই তাহলে প্রথমে যেখানে বসাতে চাই সেই জায়গাটি ধরতে হবে তারপর আমরা appendChild(), before(), after() ইত্যাদি মেথড ব্যবহার করে আমাদের তৈরি করা element টি insert করতে পারব। 


## 3. What is Event Bubbling and how does it work?

Ans: সহজভাবে বললে event ছড়ানোর প্রক্রিয়ায় হলো Event Bubbling। অর্থাৎ কোনো Button এ ক্লিক করলে সে বাটনটি কার্যকর হওয়ার জন্য প্রথমে window থেকে খুজতে খুজতে সেই নির্দিষ্ট Button এ আসবে এবং বাটনটি কার্যকর হবে এবং কাজ শেষ হওয়ার পর আবার সেই event টি এক এক করে window পর্যন্ত চলে যাবে। আর এই প্রক্রিয়াটাই হলো Event Bubbling। আবার, যদি আমরা event.stopPropagation() মেথড ব্যবহার করি তাহলে বাটনটি কার্যকর হওয়ার পর আর event টি উপরের দিকে যাবে না অর্থাৎ Event Bubbling ঐখানেই বন্ধ হয়ে যাবে।

## 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation হলো এক ধরনের টেকনিক। কোনো child element এ event listener না বসিয়ে তার parent element এ একটি মাত্র listener বসিয়ে এবং Event Bubbling কে কাজে লাগিয়ে খুব সহজেই child element গুলোর event হ্যান্ডেল করা যায়।
Event Delegation টেকনিক ব্যবহার করার কারণগুলো হলো- অনেক child element থাকলে parent এ একটাই event listener লাগে। অর্থাৎ একাধিক event listener ব্যবহার করা থেকে মুক্তি পাওয়া যায়। ডাইনামিকভাবে পরে কোনো child element যোগ করতে চাইলে খুব সহজে করা যায় এবং সেটার জন্য নতুন করে event listener যোগ কারার প্রয়োজন হয় না। এবং কম কোডে অনেক বেশি কাজ করা যায়। এতে Performance ভালো হয়।

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() ব্যবহার করা হয় কোনো event এর default behavior বন্ধ করার জন্য। যেমন: যখন আমরা কোনো form সাবমিট করি তখন সাধারণত পেজ রিলোড হয় এটা হলো form এর default behavior। আর এই default behavior বন্ধ করার জন্যই preventDefault() ব্যবহার করা হয়।
stopPropagation() মেথডটি ব্যবহার করা হয় Event Bubbling বন্ধ করার জন্য।