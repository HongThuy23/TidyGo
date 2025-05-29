package com.tidygo.tidygo.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SubServiceResponse {

    Long id;
    String name;
    String description;;
    Double originalPrice;
    Double salesPrice;
    Integer unitQuantity;
    Integer workerQuantity;
}
