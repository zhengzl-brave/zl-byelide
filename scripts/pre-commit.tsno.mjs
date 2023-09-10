#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/registry.npmmirror.com+tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/registry.npmmirror.com+tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://D:\\study\\myCourse\\byelide\\byelide\\node_modules\\.pnpm\\registry.npmmirror.com+tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spell-check`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rdHNub0AyLjAuMC9ub2RlX21vZHVsZXMvdHNuby9kaXN0L2NsaWVudC5qcyIsICJzY3JpcHRzL3V0aWxzLnRzIiwgInNjcmlwdHMvY2hlY2sudHMiLCAic2NyaXB0cy9wcmUtY29tbWl0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vRDpcXFxcc3R1ZHlcXFxcbXlDb3Vyc2VcXFxcYnllbGlkZVxcXFxieWVsaWRlXFxcXG5vZGVfbW9kdWxlc1xcXFwucG5wbVxcXFxyZWdpc3RyeS5ucG1taXJyb3IuY29tK3Rzbm9AMi4wLjBcXFxcbm9kZV9tb2R1bGVzXFxcXHRzbm9cXFxcZGlzdFxcXFxjbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy1QSVo0QzVVWi5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiaW1wb3J0IHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4L2NvcmUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRPYmplY3QoXHJcbiAgb2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IFByb2Nlc3NPdXRwdXQsXHJcbiAgbWV0aG9kOiAnbG9nJyB8ICd3YXJuJyB8ICdlcnJvcicgPSAnbG9nJ1xyXG4pIHtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XHJcbiAgICBjb25zb2xlW21ldGhvZF0oYCR7a2V5fVxcbiR7dmFsdWV9XFxuYClcclxuICB9XHJcbn1cclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XHJcblxyXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eCdcclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5pbXBvcnQgeyBwcmludE9iamVjdCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5hd2FpdCAkYHBucG0gc3BlbGwtY2hlY2tgLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuICBjb25zb2xlLmxvZyhvdXQpXHJcbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbn0pXHJcblxyXG5hd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgcHJpbnRPYmplY3Qob3V0KVxyXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG59KVxyXG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcclxuXHJcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcclxuXHJcbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxyXG5cclxuYXdhaXQgaW1wb3J0KCcuL2NoZWNrJykuY2F0Y2goKCkgPT4ge1xyXG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxyXG59KVxyXG5cclxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxyXG5cclxuYXdhaXQgJGBnaXQgYWRkIC5gXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsU0FBUSxpQkFBaUIseUJBQXdCO0FBQWpELElBQThEQTtBQUE5RDtBQUFBO0FBQTBELElBQUlBLFdBQVEsa0JBQWtCLDJJQUEySTtBQUFBO0FBQUE7OztBQ0U1TixTQUFTLFlBQ2QsUUFDQSxTQUFtQyxPQUNuQztBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBQ2pELFlBQVEsUUFBUSxHQUFHO0FBQUEsRUFBUTtBQUFBLENBQVM7QUFBQSxFQUN0QztBQUNGO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBSUE7QUFFQSxVQUFNLG9CQUFvQixNQUFNLENBQUMsUUFBdUI7QUFDdEQsY0FBUSxJQUFJLEdBQUc7QUFDZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBRUQsVUFBTSxRQUFRLElBQUksQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBdUI7QUFDeEYsa0JBQVksR0FBRztBQUNmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBOzs7QUNkRDtBQUVBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sTUFBTTtBQUNsQyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
