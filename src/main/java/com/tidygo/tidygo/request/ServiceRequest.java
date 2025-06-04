package com.tidygo.tidygo.request;

import com.tidygo.tidygo.entity.enums.ServiceUnitType;

import jakarta.validation.constraints.NotBlank;
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
public class ServiceRequest {

    @NotBlank(message = "Không được để trống tên dịch vụ")
    String name;

    // @NotBlank(message = "Không được để trống đơn vị dịch vụ")
    ServiceUnitType unitType;

    String description;
}
