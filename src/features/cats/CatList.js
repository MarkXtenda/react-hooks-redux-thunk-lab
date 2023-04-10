import React from "react";

export default function CatList({cats}) {
    return cats.map(({id,url})=><img style={{height: "200px", width: "200px"}} key={id} src={url} alt='cat'></img>)
}

