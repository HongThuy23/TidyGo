package com.tidygo.tidygo.response;

import java.time.LocalDateTime;

import com.tidygo.tidygo.entity.enums.ServiceUnitType;
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
public class ServiceResponse {

    Long id;
    String name;
    ServiceUnitType unitType;
    String description;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;
    Integer numberOfSubService;
}
