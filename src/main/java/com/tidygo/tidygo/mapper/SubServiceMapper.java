package com.tidygo.tidygo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tidygo.tidygo.entity.SubService;
import com.tidygo.tidygo.response.SubServiceResponse;

@Mapper(componentModel = "spring")
public interface SubServiceMapper {

    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "originalPrice", source = "originalPrice")
    @Mapping(target = "salesPrice", source = "salesPrice")
    @Mapping(target = "unitQuantity", source = "unitQuantity")
    @Mapping(target = "workerQuantity", source = "workerQuantity")
    SubServiceResponse toSubServiceResponse(SubService subService);
}
