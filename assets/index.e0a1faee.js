import{R as s,a as l,j as r,b as c,c as d}from"./vendor.30b52562.js";const f=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};f();s.initialize("UA-43653001-4");function u(){return c.useEffect(()=>{s.pageview(window.location.pathname+window.location.search)},[]),d("div",{className:"flex overflow-hidden justify-center items-center h-screen w-screen bg-white dark:bg-black",children:[r("h1",{"data-text":"Mustafa Ismail !",className:"glitch  font-bold text-black dark:text-white bg-inherit",children:"Mustafa Ismail !"}),r("div",{className:"scanlines"})]})}l.render(r(c.StrictMode,{children:r(u,{})}),document.getElementById("root"));