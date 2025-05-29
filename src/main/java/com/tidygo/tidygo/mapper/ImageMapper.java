package com.tidygo.tidygo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tidygo.tidygo.entity.Image;
import com.tidygo.tidygo.response.ImageResponse;

@Mapper(componentModel = "spring")
public interface ImageMapper {

    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "url", source = "url")
    ImageResponse toImageResponse(Image image);

    List<ImageResponse> toImageResponse(List<Image> images);
}
