package com.tidygo.tidygo.service;

import java.util.List;

import com.tidygo.tidygo.response.SubServiceResponse;

public interface ISubServiceService {

    List<SubServiceResponse> getAllSubServices();

    List<SubServiceResponse> getSubServicesByServiceId(Long serviceId);
}
