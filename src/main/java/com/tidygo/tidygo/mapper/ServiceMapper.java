package com.tidygo.tidygo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tidygo.tidygo.entity.Service;
import com.tidygo.tidygo.response.ServiceDetailResponse;
import com.tidygo.tidygo.response.ServiceResponse;

@Mapper(componentModel = "spring")
public interface ServiceMapper {

    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "unitType", source = "unitType")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "createdAt", source = "createdAt")
    @Mapping(target = "updatedAt", source = "updatedAt")
    @Mapping(target = "numberOfSubService", expression = "java(service.getSubServices() != null ? service.getSubServices().size() : 0)")
    ServiceResponse toServiceResponse(Service service);

    List<ServiceResponse> toServiceResponse(List<Service> services);

    @Mapping(target = "subServiceResponses", source = "subServices")
    @Mapping(target = "numberOfSubService", expression = "java(service.getSubServices() != null ? service.getSubServices().size() : 0)")
    // @Mapping(target = "serviceImageResponses", expression =
    // "java(service.getServiceImages() != null ?
    // imageMapper.toImageResponse(service.getServiceImages().getImages()) : null)")
    ServiceDetailResponse toServiceDetailResponse(Service service);

    List<ServiceDetailResponse> toServiceDetailResponse(List<Service> services);
}
