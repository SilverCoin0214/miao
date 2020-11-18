import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopAlbumsAction } from "../../store/actionCreators";

import SceThemeHeaderNormal from "@/components/theme-header-normal";
import SceAlbumCover from "@/components/album-cover";
import ScePagination from "@/components/pagination";
import { TopAlbumWrapper } from "./style";

export default memo(function SceTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1);

  const { topAlbums, total } = useSelector(
    (state) => ({
      topAlbums: state.getIn(["album", "topAlbums"]),
      total: state.getIn(["album", "topTotal"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <SceThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {/* {topAlbums.map((item, index) => {
          return (
            <SceAlbumCover
              size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item}
            />
          );
        })} */}
      </div>
      <ScePagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});
