## Project Abstract & Description

In May 24th, 2019, Taiwan legalized Same-Sex Marriage, making it the first country in Asia to perform same-sex marriage. In fact, the history of gay rights in Taiwan can be traced back to 1986, as Chia-Wei Chi petitioned to Taipei court. Inspired by other data visualization of gay rights in the U.S, I decided to make an interactive timeline of history of Same-Sex Marriage in Taiwan. This website includes three parts: Timeline, Information and sign-up. The whole visual is a vertical timeline that people can look through it by scrolling down and up, also the website will provide more specific information through interaction. on the bottom of the website, there is a sign up button for people to access more news and information about LGBTQ rights in the world.

## Data collecting

Since there is no comprehensive data about same-sex marriage of Taiwan written in English, so I decided to collect data from different websites and translate it into English. At first, I attempted to include the whole history of LGBTQ rights movement, and found that it will be too much for one-week project because of the amount of data. So I decided to narrow down the sale and focus on the history of Same-Sex Marriage. That being said, I will also include some important movements and incidents so as to support the structure of the timeline.

## Visual Design & Interaction Design

Since the project is informative, I decided to make the interaction and visual as clear and bright as possible.  

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f66bae96-673e-4015-9a10-20f80a842d06/Screen_Shot_2020-03-23_at_6.00.28_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f66bae96-673e-4015-9a10-20f80a842d06/Screen_Shot_2020-03-23_at_6.00.28_PM.png)

The format includes two-column, vertical time line, on the right, "scroll down" and the bottom texts give user hints to scroll to get more detail. To improve the interactivity, I add some fadein and fadeout effect in photos on the left. Originally, I choose green and yellow as the two main color of my project, after finishing the structure, I found that the color seems to bit too boring to fit the theme. So I use [https://cssgradient.io/](https://cssgradient.io/) to generate gay pride color gradient. 

## Development

Before creating the timeline, I looked up several tutorials to learn how to do it. After research, I found that ::after pseudo element would be the easiest way to create vertical timeline. To make sure all the elements are placed in the right place, I checked through inspector and adjust the element several times. During spring break, I learned a bit CSS animation in Udemy advanced CSS class, so I also tried to apply it into title. For the JavaScript part, I would like to create smooth fadeIn/fadeOut effect in the elements on the left, so the elements are set to show up after window reaching certain parts. On the back-end side, I use get and post to create a sign up tool, so that people can subscribe my further LGBTQ-related creation or latest LGBTQ news. The database is built on Mongodb. After all of it, I deploy my project on glitch, and revise the code back and forth based on the html page shown in glitch.

## Reference

Wikipedia - [https://zh.wikipedia.org/wiki/臺灣同性婚姻](https://zh.wikipedia.org/wiki/%E8%87%BA%E7%81%A3%E5%90%8C%E6%80%A7%E5%A9%9A%E5%A7%BB) (Traditional Chinese)

Civil Partnership Research - [https://civilpartnership2016.wordpress.com/2016/08/28/我國相關立法提案整理/](https://civilpartnership2016.wordpress.com/2016/08/28/%E6%88%91%E5%9C%8B%E7%9B%B8%E9%97%9C%E7%AB%8B%E6%B3%95%E6%8F%90%E6%A1%88%E6%95%B4%E7%90%86/)

CNN - [https://www.bbc.com/zhongwen/trad/chinese-news-40048682](https://www.bbc.com/zhongwen/trad/chinese-news-40048682)

The News Lens - [https://www.thenewslens.com/article/57783](https://www.thenewslens.com/article/57783)

Timeline CSS - [https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline)

Focus Taiwan - [https://focustaiwan.tw/politics/201905170024](https://focustaiwan.tw/politics/201905170024)

Legislative Yuan - [https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=322&pid=13](https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=322&pid=13)

Mei-Nu Yu - [https://ahrcapec.weebly.com/yu-mei-nu---outline.html](https://ahrcapec.weebly.com/yu-mei-nu---outline.html)

Wikipedia - [https://en.wikipedia.org/wiki/LGBT_rights_in_Taiwan](https://en.wikipedia.org/wiki/LGBT_rights_in_Taiwan)

TAPCPR - [https://tapcpr.org/english/about-us](https://tapcpr.org/english/about-us)

## Translations

1986 - 祁家威首次提出同性婚姻訴願遭拒絕

Chia-Wei Chi campaigned the Taiwanese government to marry his partner and get refused.

1996 - 首場公開同志婚禮

First public gay wedding was held in Taipei.

2000 - 釋憲遭拒絕

Chi filed the petition to Court of Grand Justice and get denied.

2001 - 由法務部提出的人權保障基本法草案首次提及同性婚姻

Ministry of Justice drafted Human Right Law, which is the first law draft that mention same-sex marriage.

2003 - 人權基本法草案通過，但因部分內閣反對而未進入立法程序

The draft of Human Right Law was passed and sent to Legislative Yuan, however, this law had never been introduce in legislative procedure due to the opposition from Executive Yuan.

2006 - 蕭美琴提出同性伴侶法，並有38位立委連署，但因25位立委反對而遭退回

Lawmaker Bi-Khim Hsiao proposed a bill seeking to legalize same-sex marriage, and got signed by 38 lawmakers, however, it's rejected.

2011 - 一對同志情侶提出行政訴訟

A gay couple filed an administrative litigation about same-sex marriage registration.

2012 - 聲請釋憲，不久後因遭受人身安全威脅而撤銷

The gay couple filed a petition for constitutional interpretation but soon revoked it because of the  threat of safety.

2012 - 尤美女委員提出民法修正草案並一讀通過，遭法務部長公開反對

Lawmaker Mei-nu Yu proposed a draft to amend the Civil Code to legalize same-sex marriage.

2013 - 內政部承認一起跨性別之同性婚姻

Minister of The Internal accepted a request for the country's first transgender marriage, after initially questioning the couple's gender.

2013 - 伴侶盟將多元成家立法草案送進立法院，立法院將該草案的第一部份一讀通過，鄭麗君委員舉行正反方公聽會，引起反對方的強烈反應。

The Taiwan Alliance to Promote Civil Partnership Rights ("TAPCPR") drafted three bills of diversified family formation and sent it to Legislative Yuan.

2015 - 高雄市受理同性伴侶登記

the special municipality of Kaohsiung announced a plan to allow same-sex couples to mark their partners in civil documents for reference purposes.

2015 - 伴侶盟律師團與祁家威，台北高等行政法院與台北市政府都提出釋憲

Chia-Wei Chi, Taipei High Administrative Court and Taipei City Government requested a constitutional interpretation on whether the Civil Code violates citizens' freedom of marriage..

2016 - 蔡英文首次以總統身份支持婚姻平權

Ing-Wen Tsai, the president of Taiwan, support marriage equity publicly as a president for the first time. 

2016 - 民法修正案通過一讀並交由黨團協商

The draft to amend the Civil Code to legalize same-sex marriage passed the first reading and send to consult Among Political Parties.

2017 - 司法院大法官召開憲法法庭進行言詞辯論

2017 - 司法院公布民法沒有保障同性婚姻違憲

The constitutional court issued that the statutory ban on same-sex marriage in Civil Code is in violation of people's freedom of marriage. (also known as the Judicial Yuan Interpretation No. 748)

2018 - 全國公投第十、十二案通過，同性婚姻不得直接修改民法

Taiwanese voters approved that Civil Code should not be amended to include same-sex marriage and chose a special law rather than Civil Code as the means to formalized same-sex marriage on national referendum.

2019 - 5/17 司法院釋字七四八號施行法通過

The executive proposed a special law for same-sex marriage in February, The Enforcement Act of the Judicial Yuan Interpretation No. 748. It's passed by Legislative Yuan.

2019 - 5/24 司法院釋字七四八號施行法正式生效

The Enforcement Act of the Judicial Yuan Interpretation is officially enacted.