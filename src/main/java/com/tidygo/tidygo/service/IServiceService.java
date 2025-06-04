package com.tidygo.tidygo.service;

import java.util.List;

import com.tidygo.tidygo.request.ServiceRequest;
import com.tidygo.tidygo.response.ServiceResponse;

public interface IServiceService {
    List<ServiceResponse> getAllServices();

    ServiceResponse getServiceById(Long id);

    ServiceResponse updateService(Long id, ServiceRequest serviceRequest);
}
