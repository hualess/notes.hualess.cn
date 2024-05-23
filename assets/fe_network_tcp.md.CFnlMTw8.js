import{_ as r}from"./chunks/ArticleMetadata.DwOS4yrW.js";import{_ as d,D as s,c as n,I as u,w as p,j as t,a as h,a9 as P,o as a,b as T,e as C}from"./chunks/framework.B6pjmo9y.js";const b="/assets/tcp-three-handshakes.JgqBhamE.png",m="/assets/tcp-four-waves.BTA1LjTr.png",M=JSON.parse('{"title":"TCP","description":"","frontmatter":{},"headers":[],"relativePath":"fe/network/tcp.md","filePath":"fe/network/tcp.md","lastUpdated":1716434902000}'),g={name:"fe/network/tcp.md"},_=t("h1",{id:"tcp",tabindex:"-1"},[h("TCP "),t("a",{class:"header-anchor",href:"#tcp","aria-label":'Permalink to "TCP"'},"​")],-1),q=P('<p>TCP（Transmission Control Protocol 传输控制协议）是一个<strong>面向连接的</strong>、<strong>可靠的</strong>、<strong>基于字节流</strong>的传输层通信协议</p><div class="tip custom-block"><p class="custom-block-title">TCP 连接</p><p>TCP 连接是用于保证可靠性和流量控制维护的某些状态信息的组合，这些信息包括 Socket、序列号和窗口大小</p><ul><li><strong>Socket</strong>：由 IP 地址和端口号组成</li><li><strong>序列号</strong>：用来解决乱序问题等</li><li><strong>窗口大小</strong>：用来做流量控制</li></ul></div><div class="tip custom-block"><p class="custom-block-title">TCP 四元组</p><ul><li>源地址</li><li>源端口</li><li>目的地址</li><li>目的端口</li></ul><p>TCP 四元组可以唯一的确定一个连接</p></div><h2 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h2><blockquote><p>TCP 连接建立</p></blockquote><p><strong>三次握手</strong>是指在建立一个 TCP 连接时客户端和服务器总共要<strong>发送 3 个数据包以确认连接的建立</strong></p><p>三次握手的过程如下图所示：</p><p><img src="'+b+'" alt="TCP 三次握手"></p><p>最开始时客户端和服务器都处于 <code>CLOSED</code> 状态。然后服务器主动监听某个端口（此时处于 <code>LISTEN</code> 状态）</p><h3 id="第一次握手" tabindex="-1">第一次握手 <a class="header-anchor" href="#第一次握手" aria-label="Permalink to &quot;第一次握手&quot;">​</a></h3><blockquote><p><strong>由客户端发起</strong></p></blockquote><p>客户端会随机初始化一个序列号（<code>client_isn</code>）然后发送一个带有 <code>SYN</code> <code>seq = client_isn</code> 信息的数据包。发送完成后客户端进入 <code>SYN_SEND</code> 状态（连接发送状态）</p><ul><li><code>SYN</code> 是一个标志位，为 1 时表示希望建立连接</li><li><code>seq = client_isn</code> 是客户端随机初始化的序列号（一个 32 位的无符号数）</li></ul><h3 id="第二次握手" tabindex="-1">第二次握手 <a class="header-anchor" href="#第二次握手" aria-label="Permalink to &quot;第二次握手&quot;">​</a></h3><blockquote><p><strong>由服务器发起</strong></p></blockquote><p>服务器收到客户端的 <code>SYN</code> 报文后，首先会随机初始化自己的序列号（<code>server_isn</code>）然后发送一个带有 <code>SYN</code> <code>ACK</code> <code>seq = server_isn</code> <code>ack = client_isn + 1</code> 信息的数据包。发送完成后服务器进入 <code>SYN_RCVD</code> 状态（连接收到状态）</p><ul><li><code>ACK</code> 是一个标志位，表示收到了请求</li><li><code>seq = server_isn</code> 是服务器随机初始化的序列号（一个 32 位的无符号数）</li><li><code>ack = client_isn + 1</code> 是一个确认应答号，值为<strong>客户端序列号 + 1</strong></li></ul><h3 id="第三次握手" tabindex="-1">第三次握手 <a class="header-anchor" href="#第三次握手" aria-label="Permalink to &quot;第三次握手&quot;">​</a></h3><blockquote><p><strong>由客户端发起</strong></p></blockquote><p>客户端收到服务器报文后，会再发送一个带有 <code>ACK</code> <code>ack = server_isn + 1</code> 信息的数据包。发送完成后客户端进入 <code>ESTABLISHED</code> 状态（连接成功状态）服务器收到客户端发送的应答报文包后也会进入 <code>ESTABLISHED</code> 状态</p><ul><li><code>ack = server_isn + 1</code> 是一个确认应答号，值为<strong>服务器序列号 + 1</strong></li></ul><div class="tip custom-block"><p class="custom-block-title">三次握手可以保证客户端和服务器能够确认双方的接收和发送能力是否正常</p><ul><li>第一次握手：客户端发送 <code>SYN</code> 报文给服务器，服务器接收该报文 <ul><li>客户端什么都不能确认</li><li>服务器确认：自己接收正常，对方发送正常</li></ul></li><li>第二次握手：服务器发送 <code>SYN + ACK</code> 报文给客户端，客户端接收该报文 <ul><li>客户端确认：自己发送正常、接收正常，对方发送正常、接收正常</li><li>服务器确认：自己接收正常，对方发送正常</li></ul></li><li>第三次握手：客户端发送 <code>ACK</code> 报文给服务器 <ul><li>客户端在第二次握手时已经完成确认</li><li>服务器确认：自己发送正常，接收正常，对方发送正常、接收正常</li></ul></li></ul></div><h3 id="三次握手的作用" tabindex="-1">三次握手的作用？ <a class="header-anchor" href="#三次握手的作用" aria-label="Permalink to &quot;三次握手的作用？&quot;">​</a></h3><ol><li>防止旧的重复连接初始化造成混乱</li><li>同步双方初始序列号（序列号能够保证数据包不重复、不丢弃和按序传输）</li><li>避免资源浪费</li></ol><h3 id="为什么不是两次握手" tabindex="-1">为什么不是两次握手? <a class="header-anchor" href="#为什么不是两次握手" aria-label="Permalink to &quot;为什么不是两次握手?&quot;">​</a></h3><p>两次握手无法防止历史连接的建立，会造成双方资源的浪费，也无法可靠的同步双方序列号</p><h3 id="为什么不是四次握手" tabindex="-1">为什么不是四次握手? <a class="header-anchor" href="#为什么不是四次握手" aria-label="Permalink to &quot;为什么不是四次握手?&quot;">​</a></h3><p>因为通过前三次已经可以建立一个可靠的连接，如果再发送第四次确认消息会浪费资源，所以不需要使用更多的通信次数</p><h3 id="三次握手过程中-可以携带数据吗" tabindex="-1">三次握手过程中，可以携带数据吗？ <a class="header-anchor" href="#三次握手过程中-可以携带数据吗" aria-label="Permalink to &quot;三次握手过程中，可以携带数据吗？&quot;">​</a></h3><p>第一次、第二次握手不可以携带数据，第三次握手可以携带数据，因为在第三次握手时客户端已经处于连接状态，已经知道服务器的接收、发送能力是正常的</p><h2 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h2><blockquote><p>TCP 连接断开</p></blockquote><p><strong>四次挥手</strong>是指断开一个 TCP 连接时客户端和服务器总共<strong>发送 4 个包以确认连接的断开</strong><br><strong>客户端和服务器双方都可以主动断开连接</strong></p><p>四次挥手的过程如下图所示：</p><p><img src="'+m+'" alt="TCP 四次挥手"></p><p>最开始时客户端和服务器都处于 <code>ESTABLISHED</code> 状态</p><h3 id="第一次挥手" tabindex="-1">第一次挥手 <a class="header-anchor" href="#第一次挥手" aria-label="Permalink to &quot;第一次挥手&quot;">​</a></h3><p>客户端先发送一个带有 <code>FIN=1</code> 信息的数据包，然后客户端进入 <code>FIN_WAIT_1</code> 状态</p><h3 id="第二次挥手" tabindex="-1">第二次挥手 <a class="header-anchor" href="#第二次挥手" aria-label="Permalink to &quot;第二次挥手&quot;">​</a></h3><p>服务器收到客户端的 <code>FIN</code> 报文后，就向客户端发送 <code>ACK</code> 应答报文，然后服务器进入 <code>CLOSED_WAIT</code> 状态<br> 当客户端收到服务器的 <code>ACK</code> 应答报文后会进入 <code>FIN_WAIT_2</code> 状态</p><h3 id="第三次挥手" tabindex="-1">第三次挥手 <a class="header-anchor" href="#第三次挥手" aria-label="Permalink to &quot;第三次挥手&quot;">​</a></h3><p>当服务器处理完数据后，会向客户端发送 <code>FIN</code> 报文，之后服务器进入 <code>LAST_ACK</code> 状态</p><h3 id="第四次挥手" tabindex="-1">第四次挥手 <a class="header-anchor" href="#第四次挥手" aria-label="Permalink to &quot;第四次挥手&quot;">​</a></h3><p>服务器收到服务器的 <code>FIN</code> 报文后，会回复一个 <code>ACK</code> 应答报文，之后进入 <code>TIME_WAIT</code> 状态<br> 服务器收到了 <code>ACK</code> 应答报文后，就进入了 <code>CLOSED</code> 状态（<strong>服务器完成连接的关闭</strong>）<br> 客户端在经过 <code>2MSL</code> 一段时间后会自动进入 <code>CLOSED</code> 状态（<strong>客户端完成连接的关闭</strong>）</p><div class="tip custom-block"><p class="custom-block-title">什么是 MSL</p><p><code>MSL</code> 是 Maximum Segment Lifetime（<strong>报文最大生存时间</strong>）是任何报文在网络上存在的最长时间，超过这个时间报文将会被丢弃</p><p><code>2MSL</code> 的时间是从客户端接收到 <code>FIN</code> 后发送 <code>ACK</code> 开始计时的。如果在 <code>TIME-WAIT</code> 时间内，因为客户端的 <code>ACK</code> 没有传输到服务器，客户端又接收到了服务器重发的 <code>FIN</code> 报文，那么 <code>2MSL</code> 时间将重新计时</p></div><h3 id="为什么挥手需要四次" tabindex="-1">为什么挥手需要四次？ <a class="header-anchor" href="#为什么挥手需要四次" aria-label="Permalink to &quot;为什么挥手需要四次？&quot;">​</a></h3><ul><li>在关闭连接时客户端向服务器发送 <code>FIN</code> 时，仅表示客户端不再发送数据了但是还能接收数据；</li><li>当服务器在收到客户端的 <code>FIN</code> 报文时，会先回一个 <code>ACK</code> 应答报文，而服务器可能还有数据需要处理和发送，等服务器不再发送数据时，才发送 <code>FIN</code> 报文给客户端来表示同意现在关闭连接。</li></ul><h3 id="为什么需要-time-wait-状态" tabindex="-1">为什么需要 TIME_WAIT 状态？ <a class="header-anchor" href="#为什么需要-time-wait-状态" aria-label="Permalink to &quot;为什么需要 TIME_WAIT 状态？&quot;">​</a></h3><blockquote><p>主动发起关闭连接的一方才有 <code>TIME-WAIT</code> 状态</p></blockquote><ol><li>防止历史连接中的数据，被后面相同四元组的连接错误的接收；</li><li>保证<strong>被动关闭连接</strong>的一方，能被正确的关闭；</li></ol><h3 id="为什么-time-wait-等待的时间是-2msl" tabindex="-1">为什么 TIME_WAIT 等待的时间是 2MSL？ <a class="header-anchor" href="#为什么-time-wait-等待的时间是-2msl" aria-label="Permalink to &quot;为什么 TIME_WAIT 等待的时间是 2MSL？&quot;">​</a></h3><ol><li>保证服务器能收到最后的 <code>ACK</code> 应答报文</li><li>让此次 TCP 连接中的所有报文在网络中消失，从而避免前后两个使用相同四元组的连接中的前一个连接的报文干扰后一个连接</li></ol><p>假如客户端在送 <code>ACK</code> 后，这个 <code>ACK</code> 在 <code>1MSL</code> 时到达服务器，此时服务器在收到这个 <code>ACK</code> 的前一刹那，一直在重传 <code>FIN</code>，这个 <code>FIN</code> 最坏会在 <code>1MSL</code> 时间内消失。因此从客户端发送 <code>ACK</code> 的那一刹那开始，等待 <code>2MSL</code> 可以保证客户端发送的最后一个 <code>ACK</code> 和服务器发送的最后一个 <code>FIN</code> 都在网络中消失</p><h2 id="tcp-和-udp" tabindex="-1">TCP 和 UDP <a class="header-anchor" href="#tcp-和-udp" aria-label="Permalink to &quot;TCP 和 UDP&quot;">​</a></h2><h3 id="tcp-和-udp-的区别" tabindex="-1">TCP 和 UDP 的区别 <a class="header-anchor" href="#tcp-和-udp-的区别" aria-label="Permalink to &quot;TCP 和 UDP 的区别&quot;">​</a></h3><ul><li><ol><li><strong>连接</strong></li></ol><ul><li>TCP 是面向连接的传输层协议，传输数据前先要建立连接；</li><li>UDP 是不需要连接，即刻传输数据。</li></ul></li><li><ol start="2"><li><strong>服务对象</strong></li></ol><ul><li>TCP 是一对一的两点服务，即一条连接只有两个端点；</li><li>UDP 支持一对一、一对多、多对多的交互通信。</li></ul></li><li><ol start="3"><li><strong>可靠性</strong></li></ol><ul><li>TCP 是可靠交付数据的，数据可以无差错、不丢失、不重复、按需到达；</li><li>UDP 是尽最大努力交付，不保证可靠交付数据。</li></ul></li><li><ol start="4"><li><strong>拥塞控制、流量控制</strong></li></ol><ul><li>TCP 有拥塞控制和流量控制机制，保证数据传输的安全性；</li><li>UDP 没有拥塞控制、流量控制，即使网络非常拥堵了，也不会影响 UDP 的发送速率。</li></ul></li><li><ol start="5"><li><strong>首部开销</strong></li></ol><ul><li>TCP 首部长度较长会有一定的开销，首部在没有使用“选项”字段时是 20 个字节，如果使用了“选项”字段则会变长的；</li><li>UDP 首部只有 8 个字节，并且是固定不变的，开销较小。</li></ul></li><li><ol start="6"><li><strong>传输方式</strong></li></ol><ul><li>TCP 是流式传输，没有边界，但保证顺序和可靠；</li><li>UDP 是一个包一个包的发送，是有边界的，但可能会丢包和乱序。</li></ul></li><li><ol start="7"><li><strong>分片不同</strong></li></ol><ul><li>TCP 的数据大小如果大于 MSS 大小，则会在传输层进行分片，目标主机收到后，也同样在传输层组装 TCP 数据包，如果中途丢失了一个分片，只需要传输丢失的这个分片。</li><li>UDP 的数据大小如果大于 MTU 大小，则会在 IP 层进行分片，目标主机收到后，在 IP 层组装完数据，接着再传给传输层。</li></ul></li></ul><blockquote><p>MSS（Maximum Segment Siz）最大分段大小：一个网络包中除去 IP 和 TCP 头部之后所能容纳的 TCP 数据的最大长度 MTU（Maximum Transmission Unit）最大传输单元：一个网络包的最大长度（以太网中一般为 1500 字节）</p></blockquote><h3 id="tcp-和-udp-的应用场景" tabindex="-1">TCP 和 UDP 的应用场景 <a class="header-anchor" href="#tcp-和-udp-的应用场景" aria-label="Permalink to &quot;TCP 和 UDP 的应用场景&quot;">​</a></h3><ul><li>TCP 面向连接，能保证数据的可靠性交付，因此经常用于： <ul><li>FTP 文件传输</li><li>HTTP / HTTPS</li></ul></li><li>UDP 面向无连接，可随时发送数据，其本身的处理既简单又高效，因此经常用于： <ul><li>包总量较少的通信，如 DNS 、SNMP 等</li><li>视频、音频等多媒体通信</li><li>广播通信</li></ul></li></ul><h3 id="tcp-和-udp-可以同时绑定相同的端口吗" tabindex="-1">TCP 和 UDP 可以同时绑定相同的端口吗？ <a class="header-anchor" href="#tcp-和-udp-可以同时绑定相同的端口吗" aria-label="Permalink to &quot;TCP 和 UDP 可以同时绑定相同的端口吗？&quot;">​</a></h3><p>传输层的<strong>端口号</strong>是用于识别同一计算机中同时通信的不同应用程序，而 TCP 和 UDP 是两个不同的传输层协议，其在内核中是两个完全独立的软件模块。<br> 当主机收到数据包后，可以在 IP 包头的<strong>协议号</strong>字段知道该数据包是 TCP 还是 UDP，所以可以根据这个信息确定送给哪个模块 (TCP/UDP) 处理，送给 TCP/UDP 模块的报文根据<strong>端口号</strong>确定送给哪个应用程序处理。<br> 因此 TCP 和 UDP 各自的端口号是相互独立的，如 TCP 有一个 80 号端口，UDP 也可以有一个 80 号端口，二者并不冲突。</p><h2 id="tcp-相关学习文章" tabindex="-1">TCP 相关学习文章 <a class="header-anchor" href="#tcp-相关学习文章" aria-label="Permalink to &quot;TCP 相关学习文章&quot;">​</a></h2><p><a href="https://xiaolincoding.com/network/3_tcp/tcp_interview.html" target="_blank" rel="noreferrer">TCP 三次握手与四次挥手面试题 —— 小林 coding</a></p>',63);function k(o,S,I,f,A,D){const i=r,c=s("ClientOnly");return a(),n("div",null,[_,u(c,null,{default:p(()=>{var e,l;return[(((e=o.$frontmatter)==null?void 0:e.aside)??!0)&&(((l=o.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(a(),T(i,{key:0,article:o.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),q])}const U=d(g,[["render",k]]);export{M as __pageData,U as default};
