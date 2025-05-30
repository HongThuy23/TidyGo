package com.tidygo.tidygo.service;

import java.util.List;

import com.tidygo.tidygo.response.ServiceDetailResponse;

public interface IServiceService {
    List<ServiceDetailResponse> getAllServices();
}
