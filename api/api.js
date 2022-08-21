import {get,post} from "@/utils/axios"
/* Get*/
//获取榜单
export const GetTopList = async() => {
	let res = await get(" /toplist/detail").then(
		res=>{
			console.log(res)
		}
	)
}

/*Post*/
//获取歌单

// export * from "./api.js"









