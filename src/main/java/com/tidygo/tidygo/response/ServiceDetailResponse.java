package com.tidygo.tidygo.response;

import java.util.List;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceDetailResponse {

    Long id;
    String name;
    String unitType;
    String description;
    String createdAt;
    String updatedAt;
    Integer numberOfSubService;
    List<SubServiceResponse> subServiceResponses;
    // List<ImageResponse> serviceImageResponses;
}
